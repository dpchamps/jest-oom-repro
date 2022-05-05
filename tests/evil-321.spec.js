
  describe("some-evil-spec=321", () => {
    it("evil-block-321", () => {
      window.evil_321 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  