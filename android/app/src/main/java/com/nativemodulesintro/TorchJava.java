package com.nativemodulesintro;

import android.content.Context;
import android.content.pm.PackageManager;
import android.hardware.camera2.CameraManager;
import android.os.Build;

import androidx.annotation.RequiresApi;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class TorchJava extends ReactContextBaseJavaModule {
    boolean deviceHasCameraFlash  = true;


    public TorchJava(ReactApplicationContext reactContext) {
        super(reactContext);
        deviceHasCameraFlash =  reactContext.getPackageManager()
                .hasSystemFeature(PackageManager.FEATURE_CAMERA_FLASH);
    }

    @Override
    public String getName() {
        return "Torch";
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    @ReactMethod
    private void on() {
        toggleTorch(true);
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    @ReactMethod
    private void off() {
        toggleTorch(false);
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    private void toggleTorch(Boolean on) {
        if(!deviceHasCameraFlash) {
            return;
        }

        CameraManager camManager = (CameraManager) getReactApplicationContext().getSystemService(Context.CAMERA_SERVICE) ;

        try {
            String cameraId = camManager.getCameraIdList()[0];
            camManager.setTorchMode(cameraId, on);
        }
        catch (Exception e)
        {

        }



    }
}