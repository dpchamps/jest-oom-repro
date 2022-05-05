
  describe("some-evil-spec=470", () => {
    it("evil-block-470", () => {
      window.evil_470 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  