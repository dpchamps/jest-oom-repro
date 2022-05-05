
  describe("some-evil-spec=629", () => {
    it("evil-block-629", () => {
      window.evil_629 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  