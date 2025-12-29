import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { Heart, Paperclip } from 'lucide-react'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export function FormMsg() {
  const formSchema = z.object({
    name: z.string().trim().min(3, 'Nome deve ter pelo menos 3 caracteres'),
    email: z.string().trim().email('Email inválido'),
    message: z.string().trim().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
  })

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <Card className="relative w-[850px]">
      <CardHeader>
        <Paperclip
          size={40}
          className="absolute inset-1/2 -top-1 -translate-x-1/2 -translate-y-1/2 text-[var(--ring)]"
        />
        <h2 className="jersey-10-regular text-center text-4xl font-bold">Enviar uma mensagem ✨</h2>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensagem</FormLabel>
                  <FormControl>
                    {/* <Input placeholder="Digite sua mensagem" {...field} /> */}
                    <textarea
                      placeholder="Digite sua mensagem"
                      {...field}
                      className="aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-24 w-full rounded-lg border px-4 py-2 shadow-xs outline-none focus-visible:border-[#3674B5] focus-visible:ring-[3px] focus-visible:ring-[#3674B5]/50"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <CardFooter className="flex w-full items-center justify-center">
              <Button
                type="submit"
                className="min-h-13 min-w-55 transform transition-all duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#3674B5]"
              >
                Enviar mensagem
              </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
