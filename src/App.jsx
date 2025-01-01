import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './assets/components/header';
import Footer from './assets/components/Footer';
import Sidebar from './assets/components/Sidebar';
import CreatePost from './assets/components/CreatePost';
import "./App.css";
import PostList from './assets/components/PostList';
import PostListProvider from './assets/store/post-list-store';

function App() {

  const [selectedTab,setSelectedTab]= useState("Create post");



  return (
    <PostListProvider>
    <div class="app-container">
    <Sidebar selectedTab ={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
    <div className="content">
    <Header></Header>
    {selectedTab === 'Home' ? (<PostList></PostList>) :  (<CreatePost></CreatePost>)}
   
    <Footer></Footer>
    </div>
    </div>

    </PostListProvider>
  );
} 

export default App;
