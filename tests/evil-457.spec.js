
  describe("some-evil-spec=457", () => {
    it("evil-block-457", () => {
      window.evil_457 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  