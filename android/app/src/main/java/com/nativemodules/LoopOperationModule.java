package com.nativemodules;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import com.facebook.react.bridge.Promise;

public class LoopOperationModule extends ReactContextBaseJavaModule {
    LoopOperationModule(ReactApplicationContext context) {
       super(context);
    }

    @Override
    public String getName() {
        return "LoopOperationModule";
    }

    @ReactMethod
    public void execBigLoop(Promise promise) {
        try {
            for (int i = 0; i < 100; i++) {
                for (int l = 0; l < 100000000; l++) {
                
                }
            }
            promise.resolve("");
        } catch(Exception e) {
            promise.reject("Create Event Error", e);
        }
    }
}