import * as pulumi from "@pulumi/pulumi";
import * as azure_native from "@pulumi/azure-native";

const rg = new azure_native.resources.ResourceGroup("static-website-rg");

export const storageAccount = new azure_native.storage.StorageAccount("sa", {
    resourceGroupName: rg.name,
    sku: {
        name: azure_native.storage.SkuName.Standard_LRS
    },
    kind: azure_native.storage.Kind.StorageV2,
    enableHttpsTrafficOnly: true
});

export const staticWebsite = new azure_native.storage.StorageAccountStaticWebsite("staticWebsite", {
    accountName: storageAccount.name,
    resourceGroupName: rg.name,
    indexDocument: "index.html",
    error404Document: "404.html",
});