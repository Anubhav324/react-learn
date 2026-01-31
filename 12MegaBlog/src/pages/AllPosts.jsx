import React,{useState,useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { Container,PostCard } from '../components' 

function AllPosts() {
    cosnt [posts,setPosts]=useState()
    useEffect (() => {},[])
    appwriteService.getPosts([]).then((posts) => {
        if(posts){
            setPosts(posts.documents)
        }
    })
  return (
    <div className='py-8 w-full'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) =>(
                    <div key ={post.$id} className='p-4 w-2/4'>
                        <PostCard post={post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts