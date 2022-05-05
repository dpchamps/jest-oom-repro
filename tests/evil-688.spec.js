
  describe("some-evil-spec=688", () => {
    it("evil-block-688", () => {
      window.evil_688 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  