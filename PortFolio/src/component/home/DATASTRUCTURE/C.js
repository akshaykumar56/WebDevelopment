import React from 'react'
import IMG from './Datas.png'
const C = () => {
  return (
    <div className='container d-flex flex-column align-items-center justify-content-around my-5'>
    <h3>DataStructure</h3>
    <h4>Watch My Work With DataStructure At My <a href='https://github.com/akshaykumar56/DataStructure'>Github</a></h4>
     <img src={IMG} alt="DATASTRUCTURE" className='my-4 shadow p-3 mb-3 bg-white rounded' />
    <p className='my-2'>A <b>Data Structure</b> is a storage that is used to store and organize data. It is a way of arranging data on a computer so that it can be accessed and updated efficiently.<br/><br/>
    A <b>Data Structure</b> is not only used for organizing the data. It is also used for processing, retrieving, and storing data. <br/><br/>
    There are different basic and advanced types of data structures that are used in almost every program or software system that has been developed. So we must have good knowledge about data structures.<br/><br/>
    <h4>Classification of Data Structure:</h4>

    <b>A. Linear data structure:</b> Data structure in which data elements are arranged sequentially or linearly, where each element is attached to its previous and next adjacent elements, is called a linear data structure.<br/> 
    Examples of Linear data structures are <b>Array, Stack, Queue, Linked List</b>.<br/><br/>

    <b>a) Static data structure:</b> Static data structure has a fixed memory size. It is easier to access the elements in a static data structure.<br/>
    Example of Static data structure is an <b>Array</b>.<br/><br/>

    <b>b) Dynamic data structure:</b> In Dynamic data structure, the size is not fixed. It can be randomly updated during the runtime which may be considered efficient concerning the memory (space) complexity of the code. <br/>
    Examples of Dynamic data structure are <b>Queue, Stack</b>.<br/><br/>

    <b>B. Non-Linear data structure:</b> Data structures where data elements are not placed sequentially or linearly are called non-linear data structures. In a non-linear data structure, we can't traverse all the elements in a single run only.<br/>
    Examples of Non-Linear data structures are <b>Trees and Graphs</b>.<br/><br/> 
    </p>
    </div>
  )
}

export default C
