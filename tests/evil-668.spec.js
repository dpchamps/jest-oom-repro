
  describe("some-evil-spec=668", () => {
    it("evil-block-668", () => {
      window.evil_668 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  