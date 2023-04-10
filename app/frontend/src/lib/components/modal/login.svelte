<script lang="ts">
	import {
		ComposedModal,
		ModalHeader,
		ModalBody,
		ModalFooter,
		TextInput,
		PasswordInput
	} from 'carbon-components-svelte';
	import { createEventDispatcher } from 'svelte';
	import { PUBLIC_API } from '$env/static/public';

	const dispatch = createEventDispatcher();

	const switchToSignUp = () => {
		dispatch('switchToSignUp', null);
	};

	export let open: boolean;

	let checked = false;
	let email = '';
	let password = '';

	const submit = async () => {
		const url = PUBLIC_API + '/token/login';
		const data = {
			email,
			password
		};
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		const json = await res.json();
		const authToken = json.auth_token;
		console.log(authToken)
	};

	$: checked = email && password ? true : false;
</script>

<ComposedModal bind:open on:submit={submit} preventCloseOnClickOutside>
	<ModalHeader label="Sign in" title="Login to your account" />
	<ModalBody hasForm>
		<TextInput labelText="Email" placeholder="john@doe.com" bind:value={email} />
		<PasswordInput
			tooltipAlignment="start"
			tooltipPosition="left"
			labelText="Password"
			placeholder="Enter password..."
			bind:value={password}
		/>
	</ModalBody>
	<ModalFooter
		secondaryButtonText={"Don't have an account? Sign up"}
		on:click:button--secondary={switchToSignUp}
		primaryButtonText="Proceed"
		primaryButtonDisabled={!checked}
	/>
</ComposedModal>
