
import 'package:flutter/foundation.dart';
import 'package:riverpod_annotation/riverpod_annotation.dart';

import '../../shared/network_provider.dart';
import 'category_api.dart';

part 'category_api_service.g.dart';

@riverpod
CategoryApiClient categoryApiService(CategoryApiServiceRef ref) {
  final dio = ref.watch(dioProvider);

  var localhost = "localhost";

  if (defaultTargetPlatform == TargetPlatform.android) {
    localhost = "10.0.2.2";
  }

  return CategoryApiClient(
    dio,
    baseUrl: "http://$localhost:3000/api/v1",
  );
}
