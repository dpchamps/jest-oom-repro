
  describe("some-evil-spec=843", () => {
    it("evil-block-843", () => {
      window.evil_843 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  