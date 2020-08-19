package com.polymovie;

import android.os.Bundle;
import android.os.Handler;

import com.facebook.react.ReactActivity;

import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript. This is used to schedule
     * rendering of the component.
     */
    // Add this method.
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(MainActivity.this);
        super.onCreate(savedInstanceState);

        //new Handler().postDelayed(() -> SplashScreen.hide(MainActivity.this), 1500);
    }

    @Override
    protected String getMainComponentName() {
        return "PolyMovie";
    }
}
