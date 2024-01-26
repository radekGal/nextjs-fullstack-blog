"use client";

import { useState } from "react";
import { Post } from "@prisma/client";
import MDEditor, { commands } from "@uiw/react-md-editor";
import { zodResolver } from "@hookform/resolvers/zod"
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button } from "../../ui/button";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form";
import { Input } from "../../ui/input";
import { CldUploadWidget } from "next-cloudinary";
import axios from "axios";
import Image from "next/image";
import Heading from "@/components/ui/heading";
import { toast } from "react-toastify";

type PostFormProps = {
  initialData?:  Post | null
}

type Cld = {
  secure_url: string;
}

const formSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters."),
  imageUrl: z.string().min(1),
  desc: z.string().min(20, "Description must be at least 20 characters."),
});

type FormType = z.infer<typeof formSchema>

const PostForm = ({ initialData }: PostFormProps) => {

  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const { status } = useSession();
  const router = useRouter();

  if(status === 'unauthenticated') {
    router.push('/');
  }
  const heading = initialData ? "Edit Post" : "Create New Post";
  const action = initialData ? 'Edit Post' : 'Publish Post'

  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData ? {
      title: initialData.title!,
      desc: initialData.desc!,
      imageUrl: initialData.imageUrl!
    } : {
      title: '',
      desc: '',
      imageUrl: '',
    },
    mode: 'onChange'
  });

  const onSubmit = async (data: FormType) => {

    try {
      setLoading(true)
      if(initialData) {
        await axios.patch(`/api/posts/${id}`, data)
        toast.success('Post updated!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });
      } else {
        await axios.post('/api/posts', data);
        toast.success('Post added!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
        });
      }
      router.refresh();
      router.push('/dashboard/posts');

    } catch(err) {
      toast.error('Something goes wrong...', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
    }
    setLoading(false);
  }

  return(
    <div className="2xl:container mx-auto">
      <Heading title={heading} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => {

              const onChange = (v: string) => {
                field.onChange(v)
              }
              return(
              <FormItem>
                <FormControl>
                  <CldUploadWidget 
                    uploadPreset='p20carj7'
                    onUpload={( result ) => {
                      if(result.event !== "success") return
                      const info = result.info as Cld;
                      onChange(info.secure_url);
                    }}
                  >
                    {({ open }) =>{
                    return(
                      <>
                        <Button onClick={() => open()}>Upload Image</Button>
                        {field.value && <Button onClick={() => onChange('')} className="ml-2">Delete</Button>}
                        {field.value && <Image width={200} height={200} src={field.value as string} className="object-cover" alt="Image" />}
                      </>
                    )
                  }}
                  </CldUploadWidget>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}}
          />
          <FormField
            control={form.control}
            name="desc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <MDEditor
                    commands={[commands.bold, commands.italic ]}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        <Button type="submit" disabled={loading}>
          {action}
        </Button>
        </form>
      </Form>
    </div>
  )
}

export default PostForm;