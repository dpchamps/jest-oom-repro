
  describe("some-evil-spec=914", () => {
    it("evil-block-914", () => {
      window.evil_914 = Array(1_000_000).fill(0).map((__, j) => Math.random())
      expect(0).toEqual(0)
    });
  });
  