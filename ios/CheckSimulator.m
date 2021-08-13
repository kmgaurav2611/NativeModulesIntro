//
//  CheckSimulator.m
//  NativeModulesIntro
//
//  Created by Dipti Agrawal on 10/08/21.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"


@interface RCT_EXTERN_MODULE(CheckSimulator, NSObject)
RCT_EXTERN_METHOD(isSimulator:(RCTResponseSenderBlock *)successCallback)

@end
