<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})
</script>


<template>
  <Card class="w-full max-w-sm">
    <CardHeader>
      <CardTitle>Login to your account</CardTitle>
      <CardDescription>
        Enter your email below to login to your account
      </CardDescription>
      <CardAction>
        <Button variant="link" @click.prevent="$router.push('/signup')" class="cursor-pointer hover:text-brand-hover">
          Sign Up
        </Button>
      </CardAction>
    </CardHeader>
    <CardContent>
      <form>
        <div class="grid w-full items-center gap-4">
          <div class="flex flex-col space-y-1.5">
            <Label for="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div class="flex flex-col space-y-1.5">
            <div class="flex items-center">
              <Label for="password">Password</Label>
              <NuxtLink to="/" class="ml-auto hover:text-brand-hover inline-block text-sm underline">
                Forgot your password?
              </NuxtLink>
            </div>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
        </div>
      </form>
    </CardContent>
    <CardFooter class="flex flex-col gap-2">
      <Button class="w-full cursor-pointer bg-brand text-white hover:bg-brand/90">
        Login
      </Button>
      
    </CardFooter>
  </Card>
</template>
