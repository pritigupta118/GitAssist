"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from "react-hook-form"

type InputType = {
  repoUrl: string,
  projectName: string,
  githubToken?: string
}


const CreatePage = () => {
  const { register, handleSubmit, reset } = useForm<InputType>()

  function onSubmit(data: InputType) {
  // window.alert(JSON.stringify(data,null,2))
  // return true
  console.log(data);
  
  }
  return (
    <div className="flex justify-center items-center gap-12 h-full">
      <img src="/undrow_github.svg" alt='github' className='h-56 w-auto' />
      <div>
        <div>
          <h1 className="font-semibold text-2xl">Link your GithHub Repository</h1>
          <p className="text-sm text-muted-foreground">
            Enter the URL of your repository to link it to Git Assist
          </p>
        </div>
        <div className="h-4"></div>
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register('projectName', { required: true })}
            placeholder='Project Name'
            required
          />
        <div className="h-4"></div>
          <Input {...register('repoUrl', { required: true })}
            placeholder='GitHub URL'
            type='url'
            required
          />
        <div className="h-4"></div>
          <Input {...register('githubToken')}
            placeholder='GitHub Token (Optional)'
          />
        <div className="h-4"></div>
        <Button type='submit'>Create Project</Button>
        </form>
        </div>

      </div>
    </div>
  )
}

export default CreatePage
