
  describe("some-evil-spec=724", () => {
    it("evil-block-724", () => {
      window.evil_724 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  