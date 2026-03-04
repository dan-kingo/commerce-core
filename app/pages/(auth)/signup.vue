<script setup lang="ts">
definePageMeta({
    layout: 'auth',
})
</script>


<template>
    <Card class="w-full max-w-sm">
        <CardHeader>
            <CardTitle>Sign up to create an account</CardTitle>
            <CardDescription>
                Enter your email below to create a new account
            </CardDescription>
            <CardAction>
                <Button @click.prevent="$router.push('/login')" variant="link" class="cursor-pointer hover:text-brand-hover">
                    Login
                </Button>
            </CardAction>
        </CardHeader>
        <CardContent>
            <form>
                <div class="grid w-full items-center gap-4">
                    <div class="flex flex-col space-y-1.5">
                        <Label for="username">Username</Label>
                        <Input id="username" type="text" placeholder="Dx_ltv" />

                        <Label for="email">Email</Label>
                        <Input id="email" type="email" placeholder="m@example.com" />
                    </div>
                    <div class="flex flex-col space-y-1.5">
                        <div class="flex items-center">
                            <Label for="password">Password</Label>
                            
                        </div>
                        <Input id="password" type="password" placeholder="Enter your password" />
                    </div>
                </div>
            </form>
        </CardContent>
        <CardFooter class="flex flex-col gap-2">
            <Button class="w-full cursor-pointer bg-brand text-white hover:bg-brand/90">
                Start free trial
            </Button>

        </CardFooter>
    </Card>
</template>
