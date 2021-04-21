import Head from 'next/head'
import Nav from '../components/Nav'
import { 
  Input, 
  Button, 
  Empty
} from 'antd'
import { 
  SearchOutlined
} from '@ant-design/icons'
import useLS from 'use-local-storage'
import NewList from '../components/NewList'
import { useState, useContext } from 'react'
import GlobalContext from '../contexts/Global'
import Link from 'next/link'
import ListCard from '../components/ListCard'

const App = () => {
  const [lists, setLists] = useContext(GlobalContext)

  return (
    <>
      <Head>
        <title>Picture List</title>
      </Head>
      <Nav />
      <Input
        prefix={<SearchOutlined />}
        addonAfter={<NewList />}
      />
      {lists.length > 0
        ? (
          lists.map(({ name }, i) => (
            <ListCard 
              key={name}
              index={i} 
              name={name} 
            />
          ))
        )
        : (
          <Empty
            image={Empty.PRESENTED_IMAGE_SIMPLE}
            description='No Lists'
          >
            <NewList />
          </Empty>
        )}
    </>
  )
}

export default App
