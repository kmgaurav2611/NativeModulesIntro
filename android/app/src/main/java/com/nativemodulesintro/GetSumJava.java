package com.nativemodulesintro;


import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
public class GetSumJava extends ReactContextBaseJavaModule {

    public GetSumJava(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "GetSum";
    }

    @ReactMethod
    private void returnSum(int firstNum, int secondNum, Callback callback) {
        int result = firstNum+secondNum;
        callback.invoke( null,result);
    }
}
