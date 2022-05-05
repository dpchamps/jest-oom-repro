
  describe("some-evil-spec=444", () => {
    it("evil-block-444", () => {
      window.evil_444 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  