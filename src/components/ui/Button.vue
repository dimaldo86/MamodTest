<template>
  <button type="submit" class="btn">
    <slot />
  </button>
</template>

<script setup></script>

<style lang="scss" scoped>
.btn {
	flex-shrink: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 302px;
	height: 40px;
	font-size: 14px;
	cursor: pointer;
	background-color: var(--lightBlue);
	color: var(--white);
	font-family: "Montserrat", sans-serif;
	border-radius: 8px;
	border: none;
	outline: none;
	transition: var(--transition);

  &:hover,
  &:active,
  &:focus {
    background-color: var(--darkBlue);
  }

	&:disabled {
		background-color:rgba(73, 122, 218, 0.2);
		color: var(--darkBlue);
		cursor: default;
		transition: var(--transition);
	}
}
@media(max-width:992px) {
	.btn {
		width: 280px;
	}
}
@media(max-width:768px) {
	.btn {
		width: 100%;
	}
}
@media(max-width:576px) {
	.btn {
		font-size: 12px;
	}
}
@media(max-width:576px) {
	.btn {
		height: 35px;
	}
}
</style>
