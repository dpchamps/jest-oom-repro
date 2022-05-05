
  describe("some-evil-spec=87", () => {
    it("evil-block-87", () => {
      window.evil_87 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  