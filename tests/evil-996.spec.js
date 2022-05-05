
  describe("some-evil-spec=996", () => {
    it("evil-block-996", () => {
      window.evil_996 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  