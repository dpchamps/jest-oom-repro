
  describe("some-evil-spec=482", () => {
    it("evil-block-482", () => {
      window.evil_482 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  