<template>
    <div id="register">
        <div class="container">
            <div class="card card-body">
                <form>
                    <div class="mb-3">
                        <label for="username" class="form-label">User name</label>
                        <input type="text" class="form-control" id="username">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password">
                    </div>
                    <div class="mb-3">
                        <label for="password_confirm" class="form-label">Password_Confirm</label>
                        <input type="password" class="form-control" id="password_confirm">
                    </div>
                    <button type="submit" class="btn btn-success">Registers</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script >
import { useAuthStore } from '../stores/auth';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore()
const router = useRouter()

const user = reactive({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password_confirm: "",
})

// const errorMessage = ref < string > ("")

async function submit() {
    console.log(user);
    // await authStore.register(user)
    //     .then(res => {
    //         router.replace({ name: "login" })
    //     })
    //     .catch(err => {
    //         errorMessage.value = err.message
    //     })
}

</script>
<style>
#register .card {
    max-width: 35vw;
    margin: auto;
}
</style>