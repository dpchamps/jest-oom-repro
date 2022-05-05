
  describe("some-evil-spec=38", () => {
    it("evil-block-38", () => {
      window.evil_38 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  