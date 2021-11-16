import * as pulumi from "@pulumi/pulumi";
import * as azure_native from "@pulumi/azure-native";

const rg = new azure_native.resources.ResourceGroup("static-website-rg");

export const storageAccount = new azure_native.storage.StorageAccount("staticwebsite", {
    resourceGroupName: rg.name,
    sku: {
        name: azure_native.storage.SkuName.Standard_ZRS
    },
    kind: azure_native.storage.Kind.StorageV2,
    enableHttpsTrafficOnly: true
});