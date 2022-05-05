
  describe("some-evil-spec=987", () => {
    it("evil-block-987", () => {
      window.evil_987 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  