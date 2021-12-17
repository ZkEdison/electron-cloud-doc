import React, {useState} from 'react'
import {Button, Form, Stack} from 'react-bootstrap'

const FileSearch = (title, onFileSearch) => {
  const [inputActive, setInputActive] = useState(false)
  const [value, setValue] = useState('')
  return (
    <Stack direction='horizontal' gap={2} >
      <Form.Control placeholder='add your item here' className='me-auto'/>
      <Button>search</Button>
    </Stack>
  )
}
export default FileSearch