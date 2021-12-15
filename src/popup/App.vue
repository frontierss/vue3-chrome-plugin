<template lang="pug">
div(class="bg-indigo-100 flex justify-center items-center")
    div(class="bg-white p-5 rounded-lg shadow-lg min-w-full")
        div
            label(class="text-gray-800 font-semibold block my-3 text-md" for="username") Username
            input(
                class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
                type="text"
                name="username"
                id="username"
                placeholder="username"
            )
        div
            button(type="submit" class="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans") submit
</template>
