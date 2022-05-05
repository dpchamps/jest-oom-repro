
  describe("some-evil-spec=929", () => {
    it("evil-block-929", () => {
      window.evil_929 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  