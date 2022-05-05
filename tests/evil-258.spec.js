
  describe("some-evil-spec=258", () => {
    it("evil-block-258", () => {
      window.evil_258 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  