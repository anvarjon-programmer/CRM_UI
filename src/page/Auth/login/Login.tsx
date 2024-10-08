import { Button, Card, Checkbox, message } from "antd";
import { FastField } from "formik";
import { useEffect, useState } from "react";
import { FormContainer } from "../../../components/form";
import { hoc } from "../../../utils/hoc";
import { MainInput } from "../../../components/main-input";
import { login, setIsRememberMe } from "../../../redux/store/auth-slice";
import { useLoginProps } from "./login-props";

export const Login = hoc(useLoginProps, ({ dispatch, navigate, isRememberMe }) => {
    useEffect(() => {
        localStorage.clear();
        sessionStorage.clear();
    }, []);
    const [phoneNum,setPhoneNum] = useState('');
    
    return (
        <section
            className="flex min-h-full flex-col justify-center items-center px-6 py-12 lg:px-8 bg-no-repeat bg-gradient-to-b from-[#CF8E2F] to-[#603310]">
            <Card className="shadow-2xl mb-10 w-full max-w-md rounded-3xl backdrop-blur-xl border-y-green-50">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-4 mb-5 text-center text-2xl font-bold leading-9 tracking-tight text-[#603310]">
                         Login
                    </h2>
                </div>
                <FormContainer
                    method={"post"}
                    url={"auth/sign-in"}
                    onSuccess={({ refreshToken, token, ...item }) => {
                        if (isRememberMe) {
                            localStorage.setItem("accessToken", token);
                            localStorage.setItem("refreshToken", refreshToken);
                            console.log(refreshToken);
                            
                        } else {
                            sessionStorage.setItem("accessToken", token);
                            sessionStorage.setItem("refreshToken", refreshToken);
                        }
                        localStorage.setItem("userInfo", JSON.stringify(item));
                        console.log(1,token);
                        dispatch(login(item));
                        
                        navigate("/");
                        message.success('You are logged in successfully')
                    }}
                    onError={(err) => {
                        console.log(err);
                        message.success(err)
                    }}
                    fields={[
                        {
                            name: "phoneNumber",
                            validations: [{ type: "required" }],
                            value: "998944676789",
                            onSubmitValue: (value) => {
                                setPhoneNum(value)
                                return value;
                            },
                        },
                        {
                            name: "password",
                            validations: [{ type: "required" }],
                            value: "sophia6789",
                            onSubmitValue: (value) => value,
                        },
                    ]}
                >
                    {({ isSubmitting, values }) => {
                            localStorage.setItem("phoneNum", phoneNum)
                            return (
                            <div className="flex flex-col gap-2.5">
                                <div>
                                    <FastField
                                        name="password"
                                        component={MainInput}
                                        placeholder="***********"
                                        label="Password"
                                        isPassword={true}
                                        labelClass="text-base text-[#603310] font-semibold"/>
                                </div>
                                <div>
                                    <FastField
                                        name="phoneNumber"
                                        component={MainInput}
                                        placeholder="Phone number"
                                        label="PhoneNumber"
                                        isPhone={false}
                                        labelClass="text-base text-[#603310] font-semibold"
                                    />
                                </div>
                                
                                <Checkbox
                                    className="cursor-pointer mt-2 mb-4"
                                    checked={isRememberMe}
                                    id="remember-me"
                                    onChange={() => dispatch(setIsRememberMe(!isRememberMe))}
                                >
                                    <label
                                        htmlFor="remember-me"
                                        className="cursor-pointer text-[#603310] text-base"
                                    >
                                        Запомнить меня
                                    </label>
                                </Checkbox>
                                <Button
                                    htmlType="submit"
                                    size="large"
                                    loading={isSubmitting}
                                    className="w-full bg-[#AD7226] hover:bg-[#603310]"
                                >
                                    <span className="text-white">Отправлять</span>
                                </Button>
                            </div>
                        );
                    }}
                </FormContainer>
            </Card>
        </section>
    )
})