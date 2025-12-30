import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { Heart, Paperclip } from 'lucide-react'
import z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'
import { useRef } from 'react'

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

  const ref = useRef()

  const onSubmit = async e => {
    e.preventDefault()
    await emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        ref.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      )
      .then(() => {
        form.reset()
        console.log('Mensagem enviada com sucesso!')
        toast.success('Mensagem enviada com sucesso!')
      })
      .catch(error => {
        console.error(error)
        console.log('Erro ao enviar mensagem')
        toast.error('Erro ao enviar mensagem')
      })
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
          <form ref={ref} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                disabled={form.formState.isSubmitting}
                type="submit"
                className="min-h-13 min-w-55 transform transition-all duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#3674B5]"
              >
                Enviar mensagem
                {form.formState.isSubmitting && '...'}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
