
  describe("some-evil-spec=531", () => {
    it("evil-block-531", () => {
      window.evil_531 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  