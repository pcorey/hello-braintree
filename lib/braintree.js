Meteor.startup(function() {
    Gateway = Braintree.connect({
        environment: Meteor.settings.braintree.sandbox ? Braintree.Environment.Sandbox : Braintree.Environment.Production,
        publicKey:   Meteor.settings.braintree.publicKey,
        privateKey:  Meteor.settings.braintree.privateKey,
        merchantId:  Meteor.settings.braintree.merchantId
    });
    
    var generateToken = Meteor.wrapAsync(Gateway.clientToken.generate, Gateway.clientToken);
    var token = generateToken({});
    console.log('token', token);
});