import conf from "../conf/conf.js";
import {Client,Account,ID,Databases,Storage,Query} from "appwrite";

export class Service{
    client =new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            this.databases=new Databases(this.client);
            this.bucket=new Storage(this.client);
    }

    async createPost ({title,slug,content,featuredImage,status,userId}){
            try {
               return await this.databases.createDocument({
                databaseId:conf.appwriteDatabaseId,
                collectionId:conf.appwriteCollectionId,
                documentId:slug,
                data:{
                  title,
                  content,
                  featuredImage,
                  status,
                  userId,
                }

             } )
            } catch (error) {
                console.log("Appwrite service :: getCurrentUser :: error",error);
                
            }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
           return await this.databases.updateDocument ({
            databaseId:conf.appwriteDatabaseId,
            collectionId:conf.appwriteCollectionId,
            documentId:slug,
            data:{
                title,
                content,
                featuredImage,
                status,
            }
        })
        } catch (error) {
            console.log("Appwrite service :: updateUser :: error",error);
            
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument({
                databaseId:conf.appwriteDatabaseId,
                collectionId:conf.appwriteCollectionId,
                documentId:slug
         } )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error",error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument({
                databaseId:conf.appwriteDatabaseId,
                collectionId:conf.appwriteCollectionId,
                documentId:slug
        })
        } catch (error) {
            console.log("Appwrite service :: getPost :: error",error);
            return false;
        }
    }
    async getPosts(queries=[Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments({
                databaseId:conf.appwriteDatabaseId,
                collectionId:conf.appwriteCollectionId,
                documentId:queries
        })
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error",error);
            return false
        }
    }

    //file upload

    async uploadFile(file){
        try {
            return await this.bucket.createFile({
                bucketId:conf.appwriteBucketId,
                fileId:ID.unique(),
                file
        })
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error",error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile({
                bucketId:conf.appwriteBucketId,
                fileId:fileId
        })
            return true
        } catch (error) {
            console.log("Appwrite service :: delteFile :: error",error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview({
            bucketId:'conf.appwriteBucketId',
            fileId:'fileId'
    }).toString();
    }
}

const appwriteService =new Service()
export default appwriteService