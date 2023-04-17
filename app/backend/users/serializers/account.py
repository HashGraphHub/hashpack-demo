# --------------------------------------------------------------
# Django imports
# --------------------------------------------------------------
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _

# --------------------------------------------------------------
# Project imports
# --------------------------------------------------------------
from external_apis.hedera import HederaAccount

# --------------------------------------------------------------
# App imports
# --------------------------------------------------------------
from users.models import Account

# --------------------------------------------------------------
# 3rd Party imports
# --------------------------------------------------------------
from rest_framework import serializers
from rest_framework.serializers import ValidationError


class CreateAccountSerializer(serializers.ModelSerializer):

	private_key = serializers.CharField(max_length=300)
	external_id = serializers.CharField(max_length=300)

	class Meta:
		model = Account
		fields = (
			'external_id',
			'private_key',
		)


	def validate(self, attrs):

		operator = attrs.get("external_id")
		operator_private_key = attrs.get("private_key")
		
		#instantiate the HederaAccount class
		acc = HederaAccount(
			account_id = operator,
			operator = operator,
        	operator_private_key = operator_private_key
		)

		#test validity of account details via API
		acc = acc.account_info_query()
		if acc["status"] == 400:
			raise ValidationError(f"Validation Error: {acc['obj']}")
		return attrs
	
	def create_account(self, request, data):
		acc, create = Account.objects.get_or_create(
			user = request.user, **data
		)
		return acc



class AccountSerializer(serializers.ModelSerializer):

	class Meta:
		model = Account
		fields = (
			'id',
			'external_id',
			'private_key'
		)