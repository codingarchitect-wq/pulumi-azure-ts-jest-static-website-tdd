import * as pulumi from "@pulumi/pulumi";

pulumi.runtime.setMocks({
    newResource: function(args: pulumi.runtime.MockResourceArgs): {id: string, state: any} {
        return {
            id: args.inputs.name + "_id",
            state: args.inputs,
        };
    },
    call: function(args: pulumi.runtime.MockCallArgs) {
        return args.inputs;
    },
});

describe("When provisioning a static website", () => {
    let infra: typeof import("../index");

    beforeAll(async function() {
        // It's important to import the program _after_ the mocks are defined.
        infra = await import("../index");
    })

});