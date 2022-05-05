
  describe("some-evil-spec=537", () => {
    it("evil-block-537", () => {
      window.evil_537 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  