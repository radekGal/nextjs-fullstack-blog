"use client";

import axios from 'axios';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../../ui/form';
import { Textarea } from '../../ui/textarea';
import { Button } from '../../ui/button';

const FormSchema = z.object({
  comment: z
    .string()
    .min(5, "Comment must be at least 5 characters.")
    .max(120, "Comment must not be longer than 120 characters.")
});

type FormType = z.infer<typeof FormSchema>

const CommentForm = ({ postId } : { postId: string }) => {

  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      comment: ''
    }
  });

  const onSubmit = async (data: FormType) => {
    try {
      setSubmitting(true);
      await axios.post('/api/comments', {
          ...data,
          postId
        }
      );
      form.reset();
      router.refresh();
    } catch(err) {
      setSubmitting(false);
    } finally {
      setSubmitting(false)
    }
  }

  return(
    <div className="border border-current p-8 md:p-24 mt-16 mb-24">
      <h2 className="font-black mb-6">Leave a Comment</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Write a comment here..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-3">
            {submitting ? 'Adding': 'Add Comment'}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default CommentForm;