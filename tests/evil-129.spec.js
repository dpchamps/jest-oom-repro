
  describe("some-evil-spec=129", () => {
    it("evil-block-129", () => {
      window.evil_129 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  