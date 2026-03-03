<template>
  <div>
    <NuxtRouteAnnouncer />
    <h1 class="text-xl font-bold p-4">Hello.</h1>
    <Button class="cursor-pointer" @click="() => console.log('Button clicked!')">Click Me</Button>
  </div>
</template>
