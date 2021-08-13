//
//  Torch.m
//  NativeModulesIntro
//
//  Created by Dipti Agrawal on 07/08/21.
//

#import "React/RCTBridgeModule.h"


@interface RCT_EXTERN_MODULE(GetSum, NSObject)
RCT_EXTERN_METHOD(returnSum:(NSInteger *)name num:(NSInteger)secondNum callback:(RCTResponseSenderBlock *)successCallback)

@end
