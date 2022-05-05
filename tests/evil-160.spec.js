
  describe("some-evil-spec=160", () => {
    it("evil-block-160", () => {
      window.evil_160 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  