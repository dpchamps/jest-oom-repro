
  describe("some-evil-spec=17", () => {
    it("evil-block-17", () => {
      window.evil_17 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  